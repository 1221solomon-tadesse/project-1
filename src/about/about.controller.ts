import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
    Query,
} from '@nestjs/common';
import { AboutService } from './about.service';
import { CreateAboutDto } from './dto/create-about.dto';
import { UpdateAboutDto } from './dto/update-about.dto';
import { JwtAuthGuard } from '../common/guard/jwt-auth.guard';
import { RolesGuard } from '../common/guard/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { UserRole, Language } from '../common/constants/enum';

@Controller('about')
export class AboutController {
    constructor(private readonly aboutService: AboutService) { }

    @Post()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    create(@Body() createAboutDto: CreateAboutDto) {
        return this.aboutService.create(createAboutDto);
    }

    @Get()
    findAll(@Query('lang') lang?: Language) {
        if (lang) {
            return this.aboutService.findByLanguage(lang);
        }
        return this.aboutService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.aboutService.findOne(id);
    }

    @Patch(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    update(@Param('id') id: string, @Body() updateAboutDto: UpdateAboutDto) {
        return this.aboutService.update(id, updateAboutDto);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    remove(@Param('id') id: string) {
        return this.aboutService.remove(id);
    }
}
